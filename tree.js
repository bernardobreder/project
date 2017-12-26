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
                text: 'article'
            }, {
                text: 'calculator',
                nodes: [{
                    text: "CalculatorController"
                }, {
                    text: "CalculatorModel"
                }, {
                    text: "view",
                    nodes: [{
                        text: "CalculatorView"
                    }, {
                        text: "CalculatorViewMacOS"
                    }, {
                        text: "CalculatorViewIOS"
                    }, {
                        text: "CalculatorViewSwing"
                    }, {
                        text: "CalculatorViewWeb"
                    }]
                }]
            }, {
                text: 'desktop'
            }, {
                text: 'draw'
            }, {
                text: 'email',
            }, {
                text: 'filesystem'
            }, {
                text: 'issue'
            }, {
                text: 'message'
            }, {
                text: 'notifier'
            }, {
                text: 'page'
            }, {
                text: 'sheet'
            }, {
                text: 'slide'
            }
        ]
    });
});