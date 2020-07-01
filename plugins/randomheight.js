(function() {
    var button;

    Plugin.register('height_randomizer', {
        name: 'Height Randomizer',
        author: 'Vortetty',
        description: 'This plugin can randomize the height of all selected cubes',
        icon: 'bar_chart',
        version: '0.0.1',
        variant: 'both',
        onload() {
            button = new Action('randomize_height', {
                name: 'Randomize Height',
                description: 'Randomize the height of all selected elements',
                icon: 'bar_chart',
                click: function() {
                    Undo.initEdit({elements: Cube.selected});
                    Cube.selected.forEach(cube => {
                        cube.to[1] = cube.from[0] + Math.randomab(0.75, 1.25);
                    });
                    Undo.finishEdit('randomize cube height');
                }
            });
            MenuBar.addAction(button, 'filter');
        },
        onunload() {
            button.delete();
        }
    });

})();
