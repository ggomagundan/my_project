OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '106281976213479', '2250766b17f6f29e182673102eba7bae'
  provider :google_oauth2, '891105199825-sn7vkbcqgu05gmin0n7mu6lqet0jpkac.apps.googleusercontent.com', 'm-iRbdbDlJYMptsJSCOsanLQ'
end
