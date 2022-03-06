FROM golang:1.12-alpine AS builder

WORKDIR /go/src/app

COPY . .

RUN go build -ldflags '-s -w' hello.go

FROM scratch

WORKDIR /app

COPY --from=builder /go/src/app /

CMD ["/hello"]
