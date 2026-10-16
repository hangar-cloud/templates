require_relative "boot"

require "rails"
require "active_record/railtie"
require "action_controller/railtie"

Bundler.require(*Rails.groups)

module Starter
  class Application < Rails::Application
    config.load_defaults 8.1
    config.eager_load = Rails.env.production?

    # Set SECRET_KEY_BASE on the service. Without it each start uses a
    # throwaway key, which is enough for this page but resets sessions on
    # every deploy.
    config.secret_key_base = ENV.fetch("SECRET_KEY_BASE") { SecureRandom.hex(64) }

    # Hangar terminates HTTPS and collects what the app writes to stdout.
    config.assume_ssl = Rails.env.production?
    config.logger = ActiveSupport::TaggedLogging.logger($stdout)
    config.log_level = ENV.fetch("RAILS_LOG_LEVEL", "info")

    # Hangar routes only the service's own domains to it.
    config.hosts.clear
  end
end
