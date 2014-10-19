require 'open-uri'
require 'json'

puts "symbol:"
symbol = gets.chomp

url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + symbol
content = open(url).read

data = JSON.parse(content)

puts "Results: #{data['Symbol']} at $#{data['LastPrice']}."

percent = data['ChangePercent'].round(2)

if percent > 0
	puts "Up #{percent}%"
elsif percent < 0
	puts "Down #{percent}%"
else
	puts "No change."
end