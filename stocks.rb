require 'open-uri'
require 'json'

puts "SEARCH FOR COMPANY:"
search = gets.chomp

search_url = 'http://dev.markitondemand.com/Api/v2/Lookup/json?input=' + search
search_content = open(search_url).read
results = JSON.parse(search_content)

puts "Results: "
results.each do |item|
	puts "#{item['Symbol']} (#{item['Name']}) - #{item['Exchange']}"
end

puts "Enter symbol:"
symbol = gets.chomp

url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + symbol
content = open(url).read
data = JSON.parse(content)

begin
	success = data['Status'] == 'SUCCESS'
rescue Exception => e
	success = false
end

if success
	puts "Results: #{data['Symbol']} at $#{data['LastPrice']}."

	percent = data['ChangePercent'].round(2)

	if percent > 0
		puts "Up #{percent}%"
	elsif percent < 0
		puts "Down #{percent}%"
	else
		puts "No change."
	end
else
	puts "Symbol not found, try again."
end