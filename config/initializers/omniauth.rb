OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '106281976213479', '2250766b17f6f29e182673102eba7bae'
  provider :google_oauth2, 'AIzaSyBS_Ux4_6-Ywk7VR8AAFrmTMKo5KC8fsww', 'm-iRbdbDlJYMptsJSCOsanLQ'
end
