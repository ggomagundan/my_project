require 'test_helper'

class YoutubeControllerTest < ActionController::TestCase
  test "should get url" do
    get :url
    assert_response :success
  end

end
