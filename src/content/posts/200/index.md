---
id: 200
title: 代码高亮测试
description: 覆盖常用编程语言、标记语言、Shell、配置文件与特殊代码块的高亮回归测试
date: 2026-09-09
tags:
  - 测试
draft: false
---

这是一篇用于检查代码高亮、横向滚动与复制按钮的测试文章。行内代码示例：`const answer = 42`。

## 基础代码块

无语言标识：

```
plain <text> & symbols
中文、emoji 🚀 and a very long line: https://example.com/a/really/long/path/that/should/scroll/horizontally/instead/of/stretching/the/article/layout
```

```text
Text blocks should preserve whitespace.
    indented line
```

```diff
- const mode = "light";
+ const mode = "dark";
```

## Web

```html
<main class="app">
  <h1>Hello, world!</h1>
  <button type="button" aria-label="切换主题">Toggle</button>
</main>
```

```css
:root {
  color-scheme: light dark;
}

.card:hover {
  translate: 0 -0.125rem;
}
```

```scss
$accent: #0969da;

.card {
  color: $accent;

  &__title {
    font-weight: 600;
  }
}
```

```less
@gap: 1rem;

.grid {
  display: grid;
  gap: @gap;
}
```

```javascript
const posts = await fetch("/posts.json").then((response) => response.json());
const titles = posts.map(({ title }) => title);
console.log(titles);
```

```typescript
type Post = {
  id: number;
  title: string;
  tags?: string[];
};

const published = (post: Post): boolean => post.id > 0;
```

```jsx
export function Greeting({ name }) {
  return <h1 className="greeting">Hello, {name}!</h1>;
}
```

```tsx
type Props = { name: string };

export const Greeting = ({ name }: Props) => <h1>Hello, {name}!</h1>;
```

```astro
---
const title = "Astro";
---

<h1>{title}</h1>
```

```vue
<script setup lang="ts">
const message = "Vue";
</script>

<template>
  <h1>{{ message }}</h1>
</template>
```

```svelte
<script>
  let count = 0;
</script>

<button on:click={() => count += 1}>Count: {count}</button>
```

## 数据与配置

```json
{
  "name": "blog",
  "private": true,
  "scripts": { "build": "astro build" }
}
```

```jsonc
{
  // JSON with comments
  "editor.formatOnSave": true,
}
```

```yaml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
```

```toml
[package]
name = "blog"
version = "1.0.0"
```

```ini
[server]
host=localhost
port=4321
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Blog</title>
</feed>
```

```sql
SELECT id, title
FROM posts
WHERE draft = FALSE
ORDER BY published_at DESC;
```

```graphql
query Post($id: ID!) {
  post(id: $id) {
    title
    description
  }
}
```

## Shell 与运维

```bash
set -euo pipefail
pnpm install --frozen-lockfile
pnpm build
```

```powershell
$ErrorActionPreference = "Stop"
Get-ChildItem -Path "dist" -Recurse | Select-Object FullName
```

```bat
@echo off
set NODE_ENV=production
pnpm build
```

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY . .
RUN corepack enable && pnpm build
```

```nginx
server {
  listen 80;
  root /usr/share/nginx/html;
  try_files $uri $uri/ =404;
}
```

```makefile
.PHONY: build
build:
	pnpm build
```

```cmake
cmake_minimum_required(VERSION 3.20)
project(hello LANGUAGES CXX)
add_executable(hello main.cpp)
```

```terraform
resource "cloudflare_pages_project" "blog" {
  name = "blog"
  production_branch = "main"
}
```

```nix
{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell { packages = [ pkgs.nodejs ]; }
```

## 脚本语言

```python
from dataclasses import dataclass

@dataclass
class Post:
    title: str

print(Post("Hello"))
```

```ruby
Post = Data.define(:title)
puts Post.new(title: "Hello").title
```

```php
<?php
final class Post {
    public function __construct(public readonly string $title) {}
}
echo new Post('Hello')->title;
```

```perl
use strict;
use warnings;
my $title = "Hello";
print "$title\n";
```

```lua
local post = { title = "Hello" }
print(post.title)
```

```r
posts <- data.frame(title = c("Hello", "Astro"))
print(posts$title)
```

```julia
struct Post
    title::String
end
println(Post("Hello").title)
```

## 应用与系统语言

```c
#include <stdio.h>

int main(void) {
  puts("Hello, C!");
  return 0;
}
```

```cpp
#include <iostream>
#include <string_view>

int main() {
  constexpr std::string_view message{"Hello, C++!"};
  std::cout << message << '\n';
}
```

```csharp
record Post(string Title);
Console.WriteLine(new Post("Hello").Title);
```

```java
record Post(String title) {}

class Main {
  public static void main(String[] args) {
    System.out.println(new Post("Hello").title());
  }
}
```

```kotlin
data class Post(val title: String)
fun main() = println(Post("Hello").title)
```

```scala
case class Post(title: String)
@main def hello(): Unit = println(Post("Hello").title)
```

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, Go!")
}
```

```rust
#[derive(Debug)]
struct Post<'a> { title: &'a str }

fn main() {
    println!("{:?}", Post { title: "Hello" });
}
```

```swift
struct Post { let title: String }
print(Post(title: "Hello").title)
```

```objective-c
#import <Foundation/Foundation.h>

int main(void) {
  NSLog(@"Hello, Objective-C!");
  return 0;
}
```

```dart
class Post {
  const Post(this.title);
  final String title;
}

void main() => print(const Post('Hello').title);
```

## 函数式与并发语言

```haskell
data Post = Post { title :: String }
main :: IO ()
main = putStrLn . title $ Post "Hello"
```

```clojure
(def post {:title "Hello"})
(println (:title post))
```

```elixir
defmodule Post do
  defstruct [:title]
end

IO.inspect(%Post{title: "Hello"})
```

```erlang
-module(hello).
-export([main/0]).
main() -> io:format("Hello, Erlang!~n").
```

```fsharp
type Post = { Title: string }
printfn "%s" { Title = "Hello" }.Title
```

```ocaml
type post = { title : string }
let () = print_endline { title = "Hello" }.title
```

## 其他常用语法

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Greeting {
  string public message = "Hello";
}
```

```regex
^(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})$
```

```markdown
# Heading

- list item
- **bold** and `code`

> Blockquote
```
