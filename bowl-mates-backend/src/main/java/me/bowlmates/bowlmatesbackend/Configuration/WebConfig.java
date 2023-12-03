package me.bowlmates.bowlmatesbackend.Configuration;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // Expose the "uploads" directory as a resource
        registry.addResourceHandler("/uploads/**")
                .addResourceLocations("file:uploads/");  // assuming your images are stored in the "uploads" directory
    }
}
