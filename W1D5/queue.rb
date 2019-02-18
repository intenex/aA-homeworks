class Queue # FIFO
  def initialize
    @queue = Array.new
  end

  def enqueue(el)
    @queue.unshift(el) # move things to the back (front) of the line
  end

  def dequeue
    @queue.pop # first things in first things out
  end

  def peek
    @queue[-1] # next in line to come out
  end
end