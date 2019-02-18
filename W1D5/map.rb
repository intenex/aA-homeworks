class Map # awesome love it works great
  def initialize; @map = Array.new end

  def set(key, value)
    @map << [key, value] if !@map.any? { |pair| pair[0] == key } # if no existing key found, add the key, otherwise don't since can't have duplicates
  end

  def get(key)
    @map.each { |pair| puts "Value: #{pair[1]}" if pair[0] == key } # output the value for the key input
  end

  def delete(key)
    @map.each_with_index { |pair, index| @map.delete_at(index) if pair[0] == key } # delete the key-value pair for the key found
  end

  def show; @map.each { |pair| puts "Key: #{pair[0]} | Value: #{pair[1]}" } end # output all the key-value pairs in the map
end