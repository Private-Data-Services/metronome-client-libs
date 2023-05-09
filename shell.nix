with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "metronome-client-libs";
  buildInputs = [ openapi-generator-cli ];
}
