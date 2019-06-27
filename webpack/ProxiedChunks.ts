import { compilation } from 'webpack';
import { Source } from 'webpack-sources';

type ProxiedArray = string[] & {
  [key: string]: string[];
};

const createProxiedArray = (array: string[] = []): ProxiedArray => {
  return new Proxy(array, {
    get: (target, property) => {
      if (property in target) return target[property as any];
      return array.filter(item => item.endsWith(property.toString()));
    }
  }) as ProxiedArray;
};

export type ChunksByEntry<Key extends string> = Record<Key, ProxiedArray> & {
  [key: string]: string[];
};

interface Entrypoint {
  name: string
  id: string
  options: object
  chunks: compilation.Chunk[]
}

const createProxiedChunks = <Key extends string>(
  compilation: compilation.Compilation
): ChunksByEntry<Key> => {
  const assets: Record<string, Source> = compilation.assets
  const chunks = Array.from<[string, Entrypoint]>(compilation.entrypoints)
  .reduce<Record<string, string[]>>((acc, [key, entrypoint]) => ({
    ...acc,
    [key]: entrypoint.chunks.flatMap(chunk => chunk.files)
  }), {})
  const proxy = new Proxy(
    Object.entries<string[]>(chunks).reduce((acc, [key, array]) => {
      return {
        ...acc,
        [key]: createProxiedArray(array)
      }
    }, {} as Record<Key, ProxiedArray>),
    {
      get(target, property) {
        if (property in target) return target[property as keyof typeof target];
        return Object.keys(assets).filter(asset => asset.endsWith(property.toString()))
      }
    }
  ) as ChunksByEntry<Key>
  return proxy
}


export default createProxiedChunks
