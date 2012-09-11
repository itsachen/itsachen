# myapp.rb
require 'sinatra'

class Site < Sinatra::Application

  set :public, 'public'

  get '/' do
    erb :index
  end

  get '/portfolio' do
    erb :portfolio
  end

  get '/about' do
    erb :about
  end

  get '/contact' do
    erb :contact
  end

end
