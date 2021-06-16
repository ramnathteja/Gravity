class PersonNode {
    constructor(name) {
      this.name = name;
      this.favoriteFlavors = [];
    }
    
    addFlavor(flavor) {
      this.favoriteFlavors.push(flavor);
    }
  }
  
  class IceCreamFlavorNode {
    constructor(flavor) {
      this.flavor = flavor;
    }
  }
  
  class Graph {
    constructor() {
      this.peopleNodes = [];
      this.iceCreamFlavorNodes = [];
      this.edges = [];
    }
    
    addPersonNode(name) {
      this.peopleNodes.push(new PersonNode(name));
    }
    
    addIceCreamFlavorNode(flavor) {
      this.iceCreamFlavorNodes.push(new IceCreamFlavorNode(flavor));
    }
    
    getPerson(name) {
      return this.peopleNodes.find(person => person.name === name);
    }
    
    getFlavor(flavor) {
      return this.iceCreamFlavorNodes.find(flavor => flavor === flavor);
    }
    
    addEdge(personName, flavorName) {
      const person = this.getPerson(personName);
      const flavor = this.getFlavor(flavorName);
      person.addFlavor(flavor);
      this.edges.push(`${personName} - ${flavorName}`);
    }
    
    print() {
      return this.peopleNodes.map(({ name, favoriteFlavors }) => {
        return `${name} => ${favoriteFlavors.map(flavor => `${flavor.flavor},`).join(' ')}`;
      }).join('\n')
    }
  }
  
  const graph = new Graph(true);
  graph.addPersonNode('Emma');
  graph.addPersonNode('Kai');
  graph.addPersonNode('Sarah');
  graph.addPersonNode('Maranda');
  graph.addIceCreamFlavorNode('Chocolate Chip');
  graph.addIceCreamFlavorNode('Strawberry');
  graph.addIceCreamFlavorNode('Cookie Dough');
  graph.addIceCreamFlavorNode('Vanilla');
  graph.addIceCreamFlavorNode('Pistachio');
  
  graph.addEdge('Emma', 'Chocolate Chip');
  graph.addEdge('Emma', 'Cookie Dough');
  graph.addEdge('Emma', 'Vanilla');
  graph.addEdge('Kai', 'Vanilla');
  graph.addEdge('Kai', 'Strawberry');
  graph.addEdge('Kai', 'Cookie Dough');
  graph.addEdge('Kai', 'Chocolate Chip');
  graph.addEdge('Kai', 'Pistachio');
  graph.addEdge('Maranda', 'Vanilla');
  graph.addEdge('Maranda', 'Cookie Dough');
  graph.addEdge('Sarah', 'Strawberry');
  
  console.log(graph.print());