package com.labyrinth.app.configuration;

import java.util.List;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.orm.hibernate4.HibernateTransactionManager;
import org.springframework.orm.hibernate4.LocalSessionFactoryBuilder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.labyrinth.app.dao.StudentDAO;
import com.labyrinth.app.dao.StudentDAOImpl;
import com.labyrinth.app.model.Student;

@Configuration
@ComponentScan("com.labyrinth.app")
@EnableWebMvc
@EnableTransactionManagement
public class ApplicationContextConfig extends WebMvcConfigurerAdapter {

	@Override
    public void configureMessageConverters( List<HttpMessageConverter<?>> converters ) {
        converters.add(converter());
    }

    @Bean
    MappingJackson2HttpMessageConverter converter() {
    	
    	return new MappingJackson2HttpMessageConverter();
    }
	
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/**").addResourceLocations("/");
    }
	
    
    
    @Bean(name = "dataSource")
    public DataSource getDataSource() {
        BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/schooldbfirst");
        dataSource.setUsername("root");
        dataSource.setPassword("root");
     
        return dataSource;
    }
    
    @Autowired
    @Bean(name = "sessionFactory")
    public SessionFactory getSessionFactory(DataSource dataSource) {
     
        LocalSessionFactoryBuilder sessionBuilder = new LocalSessionFactoryBuilder(dataSource);
     
        sessionBuilder.addAnnotatedClasses(Student.class);
        sessionBuilder.scanPackages("com.labyrinth.app.model");
        sessionBuilder.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");        
        sessionBuilder.setProperty("hibernate.show_sql", "true");
        	
        return sessionBuilder.buildSessionFactory();
    }
    
    @Autowired
    @Bean(name = "transactionManager")
    public HibernateTransactionManager getTransactionManager(
            SessionFactory sessionFactory) {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager(
                sessionFactory);
     
        return transactionManager;
    }
    
    @Autowired
    @Bean(name = "studentDAO")
    public StudentDAO getStudentDAO(SessionFactory sessionFactory) {
        return new StudentDAOImpl(sessionFactory);
    }
}
