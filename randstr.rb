# 107,518,933,731 unique combinations
o = [('a'..'z'), ('A'..'Z'), (0..9)].map { |i| i.to_a }.flatten
string = (0..10).map { o[rand(o.length)] }.join

puts string