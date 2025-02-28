import renderAtom from "./atom1";
import renderJSON from "./json";
import renderRSS from "./rss2";
import { Author, Extension, FeedOptions, Item, Namespace } from "./typings";

export { Author, Extension, FeedOptions, Item, Namespace };

/**
 * Class used to generate Feeds
 */
export class Feed {
  options: FeedOptions;
  items: Item[] = [];
  categories: string[] = [];
  contributors: Author[] = [];
  extensions: Extension[] = [];
  namespaces: Namespace[] = [];

  constructor(options: FeedOptions) {
    this.options = options;
  }

  /**
   * Add a feed item
   * @param item
   */
  public addItem = (item: Item) => this.items.push(item);

  /**
   * Add a category
   * @param category
   */
  public addCategory = (category: string) => this.categories.push(category);

  /**
   * Add a contributor
   * @param contributor
   */
  public addContributor = (contributor: Author) => this.contributors.push(contributor);

  /**
   * Adds an extension
   * @param extension
   */
  public addExtension = (extension: Extension) => this.extensions.push(extension);

  /**
   * Adds a namespace
   * @param namespace
   */
  public addNamespace = (namespace: Namespace) => this.namespaces.push(namespace);

  /**
   * Returns a Atom 1.0 feed
   */
  public atom1 = (): string => renderAtom(this);

  /**
   * Returns a RSS 2.0 feed
   */
  public rss2 = (): string => renderRSS(this);

  /**
   * Returns a JSON1 feed
   */
  public json1 = (): string => renderJSON(this);
}
