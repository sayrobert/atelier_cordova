/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log('bonjour');
        this.receivedEvent('deviceready');

        
        const req = new XMLHttpRequest();
        req.open('GET', 'http://swiv.outofpluto.com:8082/api/lecture/lecture/?format=json', false);
        req.send(null);

        if (req.status === 0) {
            console.log('ERROR REQUEST');
        }

        document.querySelector('#open').addEventListener('click', function(idEvent){
            view.event(idEvent);
        });

        console.log('la requête: ', req.responseText);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function displayLessonHome (){
    lessons.forEach((element, i) => {
        if(i > 3){
            break;
        }

        document.querySelector('#lessons').textContent = 'bonjour';
    });
}

var view = {
    event: function(idEvent){
        
        result = lessons.find( function (lesson){
            lesson.id = idEvent;
        });

        document.getElementById("content").innerHTML = '<object type="text/html" data="./views/event.html"></object>';
        document.querySelector('#nomCours').innerHTML= 'test'
    },

    notif: function (){
        document.getElementById("content").innerHTML='<object type="text/html" data="./views/notif.html"></object>';
    }
};

app.initialize();