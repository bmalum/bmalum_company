defmodule BmalumCompany.PageController do
  use BmalumCompany.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
