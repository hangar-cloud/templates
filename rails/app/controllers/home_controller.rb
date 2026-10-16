class HomeController < ApplicationController
  def index
    @database = database_status
  end

  private

  def database_status
    connection = ActiveRecord::Base.connection
    if connection.adapter_name == "PostgreSQL"
      "connected to PostgreSQL #{connection.select_value("SHOW server_version")}."
    else
      "SQLite in the container. Add a PostgreSQL database and set DATABASE_URL to use it."
    end
  rescue StandardError
    "the database in DATABASE_URL is not reachable. Check the variable."
  end
end
