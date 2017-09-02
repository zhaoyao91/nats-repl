# Nats Repl

Docker image to launch a node repl container to help debug nats.

## Usage

First, launch the container

```
docker run --rm -it -e NATS_URL=$nats-server-url zhaoyao91/nats-repl
```

Then you will be in a node repl with `nats` variable initialized.

See [node-nats](https://github.com/nats-io/node-nats) for api of `nats`.

## License

MIT
