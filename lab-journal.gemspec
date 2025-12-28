# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "lab-journal"
  spec.version       = "0.1.0"
  spec.authors       = ["Lalitha A R"]
  spec.email         = ["arlalithablogs@gmail.com"]

  spec.summary       = "A Jekyll theme for scientific research logging with Tufte-style sidenotes and accessibility-first design."
  spec.homepage      = "https://github.com/lalithaar/lab-journal"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
