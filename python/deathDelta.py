#!/usr/bin/env python3.9

import json

_path = "/tmp/mozilla_jared0/response_1638863981602.json"
with open(_path, "r") as fp:
    content = json.load(fp)

container = {}
for element in content:

    if element["state"] not in container:
        container[element["state"]] = {"deathDelta": element["deaths"]}
    else:
        container[element["state"]]["deathDelta"] = element["deaths"] - \
            container[element["state"]]["deathDelta"]

print(container)
