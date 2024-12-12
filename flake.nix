{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";

    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs =
    {
      nixpkgs,
      flake-utils,
      gitignore,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        lib = pkgs.lib;
        stdenv = pkgs.stdenv;
        inherit (gitignore.lib) gitignoreSource;

        node_modules = stdenv.mkDerivation {
          pname = "superbird-webapp_node-modules";
          version = "8.9.2-thinglabs-0.0.1";
          src = gitignoreSource ./.;

          nativeBuildInputs = with pkgs; [ bun ];
          buildInputs = with pkgs; [ nodejs-slim_latest ];

          dontConfigure = true;
          dontFixup = true; # patchShebangs produces illegal path references in FODs

          buildPhase = ''
            runHook preBuild

            export HOME=$TMPDIR

            bun install --no-progress --frozen-lockfile
            bun pm trust --all

            runHook postBuild
          '';

          installPhase = ''
            runHook preInstall

            mkdir -p $out/node_modules
            mv node_modules $out/

            runHook postInstall
          '';

          outputHash = if stdenv.isLinux then "sha256-4yX9/pCkG8m0uZt5CxTC7Z6KmPCdhgrJkXJ9fHiXz6s=" else "";
          outputHashAlgo = "sha256";
          outputHashMode = "recursive";
        };
      in
      rec {
        packages = {
          superbird-webapp = stdenv.mkDerivation {
            pname = "superbird-webapp";
            version = "8.9.2-thinglabs-0.0.1";
            src = gitignoreSource ./.;

            nativeBuildInputs = with pkgs; [
              node_modules
              nodejs-slim_latest
              bun
            ];

            configurePhase = ''
              runHook preConfigure

              cp -a ${node_modules}/node_modules ./node_modules
              chmod -R u+rw node_modules
              chmod -R u+x node_modules/.bin
              patchShebangs node_modules

              export HOME=$TMPDIR
              export PATH="$PWD/node_modules/.bin:$PATH"

              runHook postConfigure
            '';

            buildPhase = ''
              runHook preBuild

              bun run build

              runHook postBuild
            '';

            installPhase = ''
              runHook preInstall

              mkdir -p $out/
              mv ./dist/* $out/

              runHook postInstall
            '';

            meta = {
              description = "The original Spotify Car Thing webapp";
              homepage = "https://github.com/JoeyEamigh/superbird-webapp";
              license = lib.licenses.mit;
              maintainers = [ "Joey Eamigh" ];
            };
          };

          default = packages.superbird-webapp;
        };
      }
    );
}
