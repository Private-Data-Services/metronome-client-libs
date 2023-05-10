with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "metronome-typescript-client-lib";
  buildInputs = [ jq nodejs nodePackages.npm vscode-with-extensions ];
}
