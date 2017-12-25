$(function () {
    $('#treeview-gargobre').treeview({
        levels: 1,
        data: [
            {
                text: 'index',
                nodes: [
                    {
                        text: 'Child 1',
                        nodes: [
                            {
                                text: 'Grandchild 1'
                            },
                            {
                                text: 'Grandchild 2'
                            }
                        ]
                    },
                    {
                        text: 'Child 2'
                    }
                ]
            },
            {
                text: 'Parent 2'
            },
            {
                text: 'Parent 3'
            },
            {
                text: 'Parent 4'
            },
            {
                text: 'Parent 5'
            }
        ]
    });
    $('#treeview-breder').treeview({
        levels: 1,
        data: [
            {
                text: 'email',
            }, 
            {
                text: 'message'
            },
            {
                text: 'notifier'
            },
            {
                text: 'calculator'
            },
            {
                text: 'page'
            },
            {
                text: 'sheet'
            },
            {
                text: 'slide'
            },
            {
                text: 'book'
            },
            {
                text: 'article'
            },
            {
                text: 'desktop'
            },
            {
                text: 'Draw'
            },
            {
                text: 'filesystem'
            }
        ]
    });
});