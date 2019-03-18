# To create an LRU Cache you need two data structures
# a Queue implemented with a doubly linked list, and a Hash, fucking amazing
# incredible that you just learned this stuff literally by listening to the lectures
# just listen actively and you can figure it out for sure
# You want to use a hash because a hash has incredibly good read
# and a linked list because linked lists have fantastic insertion and deletion capabilities
# look into how those capabilities work for sure
#
# https://www.geeksforgeeks.org/lru-cache-implementation/
#
# Your version below will be a non-optimized inefficient yet simple version versus linked lists
# which is only more simple because arrays are already implemented and linked lists aren't lol
# since you're pretty sure linked lists are actually way easier to implement and were
# invented first lol
#
# Interesting on arrays in Python https://www.pythoncentral.io/the-difference-between-a-list-and-an-array/
# 
# https://www.rubyguides.com/2017/08/ruby-linked-list/ Creating your own linked list implementation in Ruby interesting
#
# This is such an incredible application of linked lists wow https://github.com/rubygems/rubygems/pull/1188
# 
# One random possible implementation of linked lists: https://github.com/spectator/linked-list

class LRUCache
    def initialize(size)
        @size = size
        @cache = Array.new # don't set the size yet lol
    end

    def count # can't delete things by default in an array love it lol
        # returns number of elements currently in cache
        cache.length
    end

    def add(el) # right fucking love it you add things to the cache at the end and remove things if the cache is full
        # adds element to cache according to LRU principle
        cache.push(el)
        cache.shift if cache.length > size
        true
    end

    def show
        # shows the items in the cache, with the LRU item first # okay interesting so the first item should be it - you should push things into the array and shift them out cool
        cache.dup # show a duplicate of the cache don't let people just return it directly lol
    end

    private
    # helper methods here
    attr_reader :cache, :size
end