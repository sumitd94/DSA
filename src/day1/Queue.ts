type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item };

    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
    }

    this.tail.next = node;
    this.tail = node;
  }
  deque(): T | undefined {
    if (!this.head) return;

    const head = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = this.tail = undefined;
    }

    // free up space
    head.next = undefined;

    return head.value;
  }
  peek(): T | undefined {
    if (!this.head) return undefined;

    return this.head?.value;
  }
}
