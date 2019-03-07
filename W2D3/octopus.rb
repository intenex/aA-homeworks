# test array ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh', 'fishhhh']

# do benchmarks for each of these eventually for sure
def sluggish_octopus(fish_arr)
    longest_fish = Array.new
    fish_arr.each do |fish1|
        longest_fish = fish1 if fish_arr.all? { |fish2| fish1.length >= fish2.length } # nested comparison array thing so n^2
    end
    longest_fish
end

# holy shit this merge sort works now just need to modify it for measuring length and to return only the largest element but can't believe this actually works and it was pretty easy for you to just figure out nuts. Wrote the entire thing without testing anything just thinking about it and it totally worked as expected. Keep doing this stuff for sure 
# damn you need to do way more recursion practice
# sweet it works lol
def dominant_octopus(fish_arr) # merge sort though quicksort would technically work and would be more ideal to practice on but is technically worst case n^2 actually fuck it let's just do a quicksort and then merge nah let's do a merge you don't remember that as well right
    merge_sort(fish_arr)[-1] # just get the last element lol
end

# so merge sort first breaks everything down into the smallest case then builds it back up
def merge_sort(arr)
    return arr if arr.length <= 1
    split_index = arr.length/2
    # the key is that the recursive call is *before* the return so all of the individual elements will be returned before they are merged amazing
    left_half = merge_sort(arr[0...split_index]) # these will just return all the individual elements broken down, then merged, pretty amazing
    right_half = merge_sort(arr[split_index..-1]) # these will also return all the individual elements broken down
    merge(left_half, right_half) # this will merge them all back together
end

def merge(arr1, arr2) # the key to get right but you've got it yeah super lucky to really get this stuff learn it way better for sure, split then merge it right that's all there is to it
    # a [] is possible if the split_index is 0 it'll just do [0...0] which returns nothing so we'll see
    # a single element is not going to be an array so return like this too just in case
    if arr1 == []
        return arr2
    elsif arr2 == []
        return arr1
    end
    if !arr1.is_a?(Array) && !arr2.is_a?(Array) # the base case where they're both not arrays
        return arr1.length < arr2.length ? [arr1, arr2] : [arr2, arr1]
    end
    merged_arr = Array.new
    while !arr1.empty? && !arr2.empty? # until one stops becomes empty keep iterating between them
        merged_arr << (arr1[0].length < arr2[0].length ? arr1.shift : arr2.shift) # keeps popping off an element in the comparison
    end
    merged_arr += arr1 if !arr1.empty? # if any remaining elements left throw them in here
    merged_arr += arr2 if !arr2.empty?
    merged_arr
end

# this works because you don't need to sort, you just want to find the largest item as you go
def clever_octopus(arr)
    longest_fish = arr[0]
    arr.each { |fish| longest_fish = fish if fish.length > longest_fish.length }
    longest_fish
end