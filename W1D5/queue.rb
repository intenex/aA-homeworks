class Queue # FIFO
  def initialize; @queue = Array.new end
  def enqueue(el); @queue.unshift(el) end # move things to the back (front) of the line
  def dequeue; @queue.pop end # first things in first things out
  def peek; @queue[-1] end # next in line to come out
end