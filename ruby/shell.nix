with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "metronome-ruby-client-lib";
  buildInputs = [ ruby_3_1 vscode-with-extensions vscode-extensions.rebornix.ruby ];
}
