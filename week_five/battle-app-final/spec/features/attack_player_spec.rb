require 'capybara/rspec'
require 'spec_helper'
require './app'

feature 'Attack player' do
  scenario 'player 1 attacks player 2 and gets confirmation' do
    sign_in_and_play
    expect(page).to have_content "Well done Lin. You have attacked Dave"
  end
end