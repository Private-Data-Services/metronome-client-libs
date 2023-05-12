with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "metronome-ruby-examples";
  buildInputs = [ curl ruby_3_1 rubyPackages_3_1.typhoeus vscode-with-extensions vscode-extensions.rebornix.ruby ];
}
