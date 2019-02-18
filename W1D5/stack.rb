class Stack # LIFO # damn works so well love it so cool man
  def initialize; @stacks = Array.new end
  def push(el); @stacks << el end
  def pop; @stacks.pop end
  def peek; @stacks[-1] end
end