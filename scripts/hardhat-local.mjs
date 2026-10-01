import path from "node:path";
import { setMockCacheDir } from "@nomicfoundation/hardhat-utils/global-dir";

// Keep compiler downloads inside the project so restricted build environments
// never need to write to a developer's global macOS cache.
setMockCacheDir(path.join(process.cwd(), "work", "hardhat-global-cache"));

await import("../node_modules/hardhat/dist/src/cli.js");
