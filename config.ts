import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("ae_app");

config.google_drive.sheets_folder_ids =  ["1oHUHuZBh1Hi4TaSkZik5vnJxWtisSqRR"];
config.google_drive.assets_folder_ids = ["1FeuS7TDJQJlYpIXGki7vOdr3TaMjIdWj"];

config.git = {
  content_repo: "https://github.com/IDEMSInternational/ae-app-content.git",
  content_tag_latest: "1.0.0",
};


config.app_config.APP_SIDEMENU_DEFAULTS.title = "AE App";
config.app_config.APP_HEADER_DEFAULTS.title = "AE App";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from AE App";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from AE App";

config.error_logging = { dsn: "https://654b9cde1c844695ad6078348a83a65f@app.glitchtip.com/6368"};

export default config;
