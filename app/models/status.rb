class Status < ApplicationRecord
	validates :is_final, uniqueness: {message: "should one final state" }, if: :is_final
end
