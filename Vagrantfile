# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"

  config.vm.network "forwarded_port", guest: 3000, host: 3000

  config.vm.network "forwarded_port", guest: 22, host: 2224, id: 'ssh'

  config.vm.network "private_network", ip: "192.168.199.196"
  config.vm.hostname = "vue-todo.dev"


  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
  end

  config.vm.provision 'ansible' do |ansible|

    ansible.galaxy_roles_path = 'tmp/ansible-roles'

    ansible.playbook = 'ansible/playbook.yml'

    ansible.tags = ENV['TAGS']
    ansible.sudo = true
    ansible.verbose = 'vv'
  end
end
