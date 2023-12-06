package me.bowlmates.bowlmatesbackend;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.bowlmates.bowlmatesbackend.Models.*;
import me.bowlmates.bowlmatesbackend.Repositories.RestRepo;
import me.bowlmates.bowlmatesbackend.Repositories.RoleRepo;
import me.bowlmates.bowlmatesbackend.Repositories.UserRepo;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ControllerTest {

    @Autowired
    MockMvc mvc;
    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    UserRepo userRepo;
    @Autowired
    RoleRepo roleRepo;
//    @Autowired
//    RestRepo restRepo;

    private TestUser testUser0;
    private TestUser testUser1;

    private List<AvailabilityDTO> avails;

    private RestaurantDTO rest;

    @BeforeAll
    public void setup() throws Exception {
        testUser0 = makeTestUser(0);
        testUser1 = makeTestUser(1);
        avails = new ArrayList<>();
        avails.add(new AvailabilityDTO(0, 0));
        //setRest();
    }

    TestUser makeTestUser(int num) {
        Role userRole = roleRepo.findByAuthority("USER").get();
        Set<Role> authorities = new HashSet<>();
        authorities.add(userRole);
        TestUser testUser = new TestUser(0,
                "testUser" + num,
                "pass",
                "testuser" + num + "@mail.com",
                authorities,
                new HashSet<>(),
                new HashSet<>(),
                new HashSet<>(),
                new HashSet<>(),
                new byte[0]);
        TestProfile profile = new TestProfile(testUser, "test", "user");
        testUser.setProfile(profile);
        return testUser;
    }

//    void setRest() {
//        TestRestaurant rest = new TestRestaurant();
//        rest.setAddress("111 NE 45th St, Seattle, WA 98105, USA");
//        rest.setCuisine("fast_food_restaurant");
//        rest.setLatitude(47.6611f);
//        rest.setLongitude(-122.328f);
//        rest.setName("Dick's Drive-In");
//        rest.setRating(4.6f);
//        rest.setReference("https://lh3.googleusercontent.com/places/ANXAkqETojpvhaH4v5lt88Z_RtAvSnHyf3oDmr8i2uwidsfnFUp8ryZZjYOWPDV7V7lnJQw-wwv1vXMrZ71fZAohxgvUVsssc-_GrnM=s4800-w650-h650");
//    }

    @Test
    @WithMockUser(roles = "USER")
    public void testUserTest() throws Exception {
        mvc.perform(get("/user/test")).andExpect(status().isOk());
    }

    @Test
    public void testGetProfile() throws Exception {
        MvcResult result = mvc.perform(get("/user/profile")
                .with(user("testUser0")))
                .andExpect(status().isOk()).andReturn();
        JSONObject profileJSON = new JSONObject(result.getResponse().getContentAsString());
        assertEquals("test", profileJSON.getString("firstName"));
    }

    @Test
    public void testSetAvail() throws Exception {
        String availString = objectMapper.writeValueAsString(avails);
        mvc.perform(post("/user/avail/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(availString)
                        .with(user("testUser0")))
                        .andExpect(status().isOk());

        MvcResult result = mvc.perform(get("/user/avail")
                .with(user("testUser0")))
                .andExpect(status().isOk()).andReturn();
        JSONArray availsJSON = new JSONArray(result.getResponse().getContentAsString());
        JSONObject availJSON = availsJSON.getJSONObject(0);
        assertEquals(0, availJSON.getInt("day"));
        assertEquals(0, availJSON.getInt("time"));
    }

//    @Test
//    public void testSetRest() throws Exception {
//        String restString = objectMapper.writeValueAsString(rest);
//        mvc.perform(post("/user/prefs/save")
//                        .contentType(MediaType.APPLICATION_JSON)
//                        .content(restString)
//                        .with(user("testUser0")))
//                        .andExpect(status().isOk());

        //assertFalse(testUser0.getFavoriteRestaurants().isEmpty());

//        MvcResult result = mvc.perform(get("/user/prefs")
//                        .with(user("testUser0")))
//                        .andExpect(status().isOk()).andReturn();
//        JSONArray restsJSON = new JSONArray(result.getResponse().getContentAsString());
//        JSONObject restJSON = restsJSON.getJSONObject(0);
//        assertEquals(rest.getName(), restJSON.getString("name"));
//    }

}
