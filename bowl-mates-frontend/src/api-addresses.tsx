// This will ideally change with the value of an environment variable
// CHANGE TO FALSE IF GOING INTO PRODUCTION
const LOCAL : boolean = true;
// CHANGE TO FALSE IF GOING INTO PRODUCTION

const LOCAL_ADD: string =  "http://localhost:8080";
const SERVER_ADD: string = "https://backend.bowlmates.me";
const ADDRESS: string = LOCAL ? LOCAL_ADD : SERVER_ADD;

// POST user login
const login : string = "/auth/login";
const login_address : string = ADDRESS + login;

// POST user signup
const register : string = "/auth/register";
const register_address : string = ADDRESS + register;

// GET user prefs
const user_prefs : string = "/user/prefs";
const user_prefs_address : string = ADDRESS + user_prefs;

// POST user prefs
const user_prefs_save : string = "/user/prefs/save";
const user_prefs_save_address : string = ADDRESS + user_prefs_save;

// GET user availability
const user_avail : string = "/user/avail";
const user_avail_address : string = ADDRESS + user_avail;

// POST user availability
const user_avail_save : string = "/user/avail/save";
const user_avail_save_address : string = ADDRESS + user_avail_save;

// GET user matches
const user_match_show : string = "/user/match/show";
const user_match_show_address : string = ADDRESS + user_match_show;

// POST user approve matches
const user_match_approve : string = "/user/match/approve";
export const user_match_approve_address : string = ADDRESS + user_match_approve;

// POST user reject matches
const user_match_reject : string = "/user/match/reject";
export const user_match_reject_address : string = ADDRESS + user_match_reject;

// GET user profile information w/ photo url
const user_profile : string = "/user/profile";
const user_profile_address : string = ADDRESS + user_profile;

// POST user profile information (sending photo url does nothing)
const user_profile_save : string = "/user/profile/save";
const user_profile_save_address : string = ADDRESS + user_profile_save;

// GET user profile photo reference
const user_image_ref : string = "/user/photo";
const user_image_ref_address : string = ADDRESS + user_image_ref;

// POST user profile photo
const user_image_save : string = "/user/photo/save";
const user_image_save_address : string = ADDRESS + user_image_save;

// Get Successful Match Data
const user_successful_matches : string = "/user/matches";
const user_successful_matches_address : string = ADDRESS + user_successful_matches;

// Gets successful user matches
const user_successful_match_chats : string = "/user/message";
const user_successful_match_chats_address : string = ADDRESS + user_successful_match_chats;

// Gets successful user matches
const user_send_message : string = "/user/message/send";
const user_send_message_address : string = ADDRESS + user_send_message;

// GET user profile blob
const user_image : string = "/uploads/";
const user_image_address : string = ADDRESS + user_image;

// Get user profile of someone else
const user_profile_other : string = "/user/profile/other";
const user_profile_other_address : string = ADDRESS + user_profile_other;

export {
    login_address,
    register_address,
    user_prefs_address,
    user_prefs_save_address,
    user_avail_address,
    user_avail_save_address,
    user_match_show_address,
    user_profile_address,
    user_profile_save_address,
    user_successful_matches_address,
    user_successful_match_chats_address,
    user_send_message_address,
    user_image_ref_address,
    user_image_address,
    user_image_save_address,
    user_profile_other_address
};