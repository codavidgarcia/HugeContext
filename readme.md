# HugeContext

**Dynamic, Intent-Aware Semantic Memory for LLMs**

[![VS Code](https://img.shields.io/badge/VS%20Code-Extension-blue.svg)](https://marketplace.visualstudio.com/items?itemName=codavidgarcia.hugecontext)
[![MCP Compatible](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io/)
[![License: Internal Use](https://img.shields.io/badge/License-Internal_Use-orange.svg)](./LICENSE)

HugeContext is a VS Code extension and standalone MCP server that acts as a **local Context Engine** for AI assistants. It provides intelligent, contextual code understanding for Claude Desktop, Cursor, Kilo Code, and other MCP-compatible tools.

Unlike cloud-based solutions, HugeContext runs **entirely locally** - your code never leaves your machine.

---

## Why HugeContext (for everyday use)

- **Local & private**: Everything runs on your machine; nothing leaves your repo.
- **Works with your tools**: VS Code + MCP clients (Claude Desktop, Cursor, Gemini Code Assist, etc.).
- **Instant answers**: Understands code, docs, tests, and recent edits.
- **Smart ranking**: Intent-aware (debug, refactor, understand, tests) so you get the right snippets first.
- **Zero setup after install**: Opens, indexes, and keeps up with your edits automatically. 

---

## Quick Start (2 minutes, user-friendly)

### Step 1: Install the Extension
```bash
code --install-extension codavidgarcia.hugecontext
```
Or install via VS Code: Extensions → ... → Install from VSIX

### Step 2: Open Your Project
Open any project folder in VS Code. HugeContext will:
1. Download the embedding model (~23MB, first time only)
2. Index your codebase automatically
3. Watch for changes in real-time

### Step 3: Open the Dashboard
Press `Cmd/Ctrl+Shift+P` → `HugeContext: Show Dashboard`

The Dashboard shows:
- Indexing status and statistics
- One-click MCP setup for popular AI clients
- Quick actions

---

## MCP Integration (AI Assistants)

HugeContext exposes a `query_context` tool via the Model Context Protocol (MCP) so your AI assistant can pull in the right code snippets automatically.

### Supported Clients

| Client | Setup |
|--------|-------|
| **Claude Desktop** | Dashboard → Click "Claude Desktop" |
| **Cursor** | Dashboard → Click "Cursor" |
| **Kilo Code** | Dashboard → Click "Kilo Code" |
| **VS Code (Copilot Chat)** | Dashboard → Click "VS Code" |
| **Gemini Code Assist** | Dashboard → Click "Gemini Code Assist" |
| **Warp** | Dashboard → Click "Warp" |
| **Antigravity** | Dashboard → Click "Antigravity" |
| **Windsurf** | Dashboard → Click "Windsurf" |

### Global Configuration (Recommended)

For clients like **Kilo Code** that support global MCP settings, use this config:

```json
{
  "mcpServers": {
    "hugecontext": {
      "command": "node",
      "args": ["/path/to/HugeContext/dist/mcp-cli.sec.js"]
    }
  }
}
```

**Important:** Don't include `--workspace` in global config. The MCP server automatically detects the workspace from:
1. The `workspace` parameter in each query (if provided)
2. The current working directory (`cwd`)

### Cursor / Windsurf / Antigravity (VSIX + MCP)

1. Install the extension in your IDE from the Marketplace (search for "HugeContext") or use the CLI: `code --install-extension codavidgarcia.hugecontext`.
2. Add the MCP block to the IDE MCP settings. For Cursor, use the wrapper in `~/.cursor/mcp.json`:
   ```json
   {
     "mcpServers": {
       "hugecontext": {
         "command": "node",
         "args": ["/path/to/HugeContext/mcp-cursor-wrapper.js"]
       }
     }
   }
   ```
3. Open a project; HugeContext automatically detects the workspace using:
   - Environment variables (if set by the IDE)
   - **Workspace pointer file** (`~/.hugecontext/codex_workspace`) - automatically updated by the extension
   - Current working directory (fallback)
   
   The extension updates the workspace pointer file whenever you switch projects, so the MCP server always knows which workspace to use.
4. Use the dashboard inside the IDE (`HugeContext: Show Dashboard`) to verify indexing and MCP.

### Multi-Workspace Support

HugeContext v1.0.17+ supports **dynamic workspace switching**:

- One global MCP config works with ALL your projects
- Server automatically switches databases when you change repos
- **Workspace pointer file**: The VS Code extension automatically updates `~/.hugecontext/codex_workspace` with your current workspace, enabling automatic detection

**Workspace Detection Priority:**
1. `workspace` parameter in `query_context` (explicit override)
2. `CODEX_WORKSPACE_ROOT` environment variable
3. `WORKSPACE_PATH` environment variable
4. Workspace pointer file (`~/.hugecontext/codex_workspace`) - updated by extension
5. Current working directory (`cwd`)

The AI assistant can explicitly specify a workspace:
```json
{
  "query": "how does authentication work?",
  "workspace": "/Users/you/projects/my-app"
}
```

Or let it auto-detect using the workspace pointer file (recommended when using the VS Code extension).

---

## How It Works

### Intent-Aware Retrieval
HugeContext automatically detects what you're trying to do and adjusts its search strategy:

| Intent | Strategy |
|--------|----------|
| **Bug/Debug** | Stack traces, error handlers, recent changes, runtime context |
| **Refactor** | Dependencies, related files, architectural patterns |
| **Understand** | Documentation, code structure, comprehensive overview |
| **Tests** | Test files, test utilities, fixtures |
| **Architecture** | High-level overview, entry points, core modules |

### Quality-First Results

Unlike simple search, HugeContext prioritizes **quality over quantity**:

- **Minimum similarity threshold** (0.25) - Only returns genuinely relevant results
- **Score cliff detection** - Stops returning results when quality drops significantly
- **Test file filtering** - Deprioritizes tests for non-test queries
- **Dynamic content length** - More content for highly relevant files

### Semantic Search

Uses **Snowflake Arctic Embed XS** (22M params, 384 dimensions):
- Fast local inference via ONNX
- Optimized for code search with query prefixes
- Finds conceptually related code even with different terminology

### Code Graph

Builds a hypergraph of relationships:
- File → Function/Class → Method hierarchy
- Import/export dependencies
- Test ↔ Implementation connections
- Git co-change patterns

### Heat Tracking

Real-time developer activity tracking:
- Recently viewed/edited files get higher "heat"
- Heat propagates through graph connections
- Prioritizes contextually relevant code

---

## VS Code Commands

| Command | Description |
|---------|-------------|
| `HugeContext: Show Dashboard` | Open the main dashboard |
| `HugeContext: Query Context` | Semantic search (within VS Code) |
| `HugeContext: Show Context Graph` | Interactive graph visualization |
| `HugeContext: Show Indexing Stats` | Database and graph statistics |
| `HugeContext: Reindex Workspace` | Force a full reindex |
| `HugeContext: Show Logs` | Open the output channel |

---

## Configuration

### VS Code Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `hugeContext.gitHistoryMonths` | `6` | Months of Git history to index |
| `hugeContext.heatDecayInterval` | `60000` | Heat decay interval (ms) |
| `hugeContext.heatDecayRate` | `0.95` | Heat decay multiplier per interval |

---

## Supported Languages

| Language | Extensions |
|----------|------------|
| TypeScript | `.ts`, `.tsx` |
| JavaScript | `.js`, `.jsx`, `.mjs`, `.cjs` |
| Python | `.py` |
| Go | `.go` |
| Rust | `.rs` |
| Java | `.java` |
| C/C++ | `.c`, `.cpp`, `.cc`, `.cxx`, `.h`, `.hpp` |
| Ruby | `.rb` |
| C# | `.cs` |

---

## Changelog

### v1.0.17
- **Multi-workspace support**: Single global MCP config works with all projects
- **Dynamic DB switching**: Server automatically loads correct database per query
- **Workspace parameter**: Optional `workspace` param in `query_context`

### v1.0.15-16
- **MCP transport fix**: Resolved JSON-RPC errors from log output
- **Improved DB selection**: Only loads database matching current workspace

### v1.0.13-14
- **Quality-first filtering**: Minimum similarity threshold, score cliff detection
- **Reduced noise**: Tests deprioritized for non-test queries
- **Git history optimization**: Removed from non-debug pipelines
- **Dynamic content length**: More content for highly relevant results

### v1.0.12
- **Snowflake Arctic Embed**: Upgraded to optimized code search model
- **CLS pooling**: Better embedding quality for code

---

## License

HugeContext Internal Use License - see [LICENSE](./LICENSE) for details.

**Usage**: Free for personal and internal business use.
**Restrictions**: No redistribution, sublicensing, or making available to third parties.

---

## Acknowledgments

- HugeContext is created and maintained by J. David Garcia (@codavidgarcia).
- [Snowflake Arctic Embed](https://huggingface.co/Snowflake/snowflake-arctic-embed-xs) - Code-optimized embeddings
- [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) - Incremental parsing
- [Transformers.js](https://huggingface.co/docs/transformers.js) - ONNX inference
- [sql.js](https://github.com/sql-js/sql.js) - Pure JS SQLite
- [Model Context Protocol](https://modelcontextprotocol.io/) - AI integration standard
