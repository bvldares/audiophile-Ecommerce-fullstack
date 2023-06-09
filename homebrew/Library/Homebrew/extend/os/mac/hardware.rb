# typed: strict
# frozen_string_literal: true

module Hardware
  sig { params(version: T.nilable(Version)).returns(Symbol) }
  def self.oldest_cpu(version = nil)
    version = if version
      MacOSVersion.new(version.to_s)
    else
      MacOS.version
    end
    if CPU.arch == :arm64
      :arm_vortex_tempest
    # TODO: this cannot be re-enabled until either Rosetta 2 supports AVX
    # instructions in bottles or Homebrew refuses to run under Rosetta 2 (when
    # ARM support is sufficiently complete):
    #   https://github.com/Homebrew/homebrew-core/issues/67713
    #
    # elsif version >= :big_sur
    #   :ivybridge
    elsif version >= :mojave
      :nehalem
    else
      generic_oldest_cpu
    end
  end
end
