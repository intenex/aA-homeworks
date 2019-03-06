def sluggish_octopus(fish_arr)
    longest_fish = Array.new
    fish_arr.each do |fish1|
        longest_fish == fish1 if fish_arr.all? { |fish2| fish1.length >= fish2.length }
    end
    longest_fish
end