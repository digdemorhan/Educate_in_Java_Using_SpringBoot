package com.deneme.yeni;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;




@SpringBootApplication
public class YeniApplication {

	public static void main(String[] args) {
		SpringApplication.run(YeniApplication.class, args);
	}

}



//HOCA EKLETTİ
/*import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class YeniApplication {

    public static void main(String[] args) {
        SpringApplication.run(YeniApplication.class, args);
    }
    
    @Configuration
    public class WebConfig implements WebMvcConfigurer {

        @Override
        public void addResourceHandlers(ResourceHandlerRegistry registry) {
            registry.addResourceHandler("/Frontend/**")
                    .addResourceLocations("classpath:/static/Frontend/");
        }
    }
}*/
