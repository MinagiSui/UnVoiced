class TopsController < ApplicationController
  def index
    @wordlists = Wordlist.all
  end
end
