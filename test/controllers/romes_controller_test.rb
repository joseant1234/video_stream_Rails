require 'test_helper'

class RomesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rome = romes(:one)
  end

  test "should get index" do
    get romes_url
    assert_response :success
  end

  test "should get new" do
    get new_rome_url
    assert_response :success
  end

  test "should create rome" do
    assert_difference('Rome.count') do
      post romes_url, params: { rome: { name: @rome.name, vonage_session_id: @rome.vonage_session_id } }
    end

    assert_redirected_to rome_url(Rome.last)
  end

  test "should show rome" do
    get rome_url(@rome)
    assert_response :success
  end

  test "should get edit" do
    get edit_rome_url(@rome)
    assert_response :success
  end

  test "should update rome" do
    patch rome_url(@rome), params: { rome: { name: @rome.name, vonage_session_id: @rome.vonage_session_id } }
    assert_redirected_to rome_url(@rome)
  end

  test "should destroy rome" do
    assert_difference('Rome.count', -1) do
      delete rome_url(@rome)
    end

    assert_redirected_to romes_url
  end
end
