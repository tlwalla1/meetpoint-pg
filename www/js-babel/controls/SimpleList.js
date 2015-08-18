const SimpleList = {
  init: function init(settings) {
    SimpleList.config = {
      items: [1, 2, 3, 4, 5, 6, 7],
      container: $( '<div class="list"></div>'),
    };

    $.extend( SimpleList.config, settings);

    SimpleList.setup();
  },

  place: function place() {
    $('#maincontent').append(SimpleList.config.container);
  },

  setup: function setup() {
    this.getItems();
    $.each(SimpleList.config.items, SimpleList.createContainer);
    SimpleList.place();
  },

  createContainer: function createContainer() {
    const item = $(this);
    const container = item.appendTo(SimpleList.config.container);
    item.data('container', container);
  },

  getItems: function getItems() {
    // TODO: Make is so that getItems pulls from the database
    const listItem = $('<div class="item"></div>');
    const items = [];
    for (let i = 0; i < SimpleList.config.items.length; i++) {
      items.push(listItem.clone().text(SimpleList.config.items[i]));
    }
    SimpleList.config.items = items;
  },
};

$(document).ready( SimpleList.init );
