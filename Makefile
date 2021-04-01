.PHONY: run
run:
	make -j 2 local-client local-server

local-client:
	cd client; yarn dev

local-server:
	cd server; uvicorn main:app --host 0.0.0.0
