require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  subject(:dessert) { Dessert.new("cake", 10, chef) }
  let(:chef) { double("chef", :titleize => "Chef Ben", :bake => [] ) } # amazing stub methods

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to be_a(String) # can do .to be_a or .to be_an amazing lmao grammatically correct English totally nuts
    end

    it "sets a quantity" do
      expect(dessert.quantity).to be_a(Integer)
    end

    it "starts ingredients as an empty array" do # getting on a roll and fun love it and happy and lucky great homework assignment for sure. Can't wait to do merge sort and all of that again too so great
      expect(dessert.ingredients).to eq(Array.new)
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cake", "10", chef) }.to raise_error # must use a block here to pass in this not sure why but when natively passing an object must use a block like this wow you will have to reference all this stuff way more but this is such crazy good practice so glad to get to do it
    end
    
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient("flour")
      expect(dessert.ingredients).to include("flour") # to include is better than .to eq(["flour"]) though both work awesome
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do # amazing you can just put in anything you want to the before code before you write expect awesome great to know man love specs so much so glad that that's actually part of an assignment now so you're justified in spending the time to really learn speccing so great
      expect(dessert.ingredients).to receive(:shuffle!) # amazing this works this just says expect this thing to receive that call when called so great methods so awesome --> this is way better than their answer lol theirs can probabilistically statistically fail a non insignificant number of times
      dessert.mix! # to receive evaluates after the whole block is over https://relishapp.com/rspec/rspec-mocks/docs/basics/expecting-messages
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      dessert.eat(6)
      expect(dessert.quantity).to eq(4) # only to receive comes after everything else comes before love it
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { dessert.eat(11) }.to raise_error # interesting need to use a block for error raises it seems test this more
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to include("Chef Ben")
    end
  end

  describe "#make_more" do # love it so great
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end
  end
end
