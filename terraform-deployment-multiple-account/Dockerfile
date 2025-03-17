# Use the official Jenkins Inbound Agent image as the base image
FROM jenkins/inbound-agent:latest

# Switch to root user to install dependencies
USER root

# Set environment variables
ENV TERRAFORM_VERSION=1.5.5

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    jq     \
    python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" \
    && unzip awscliv2.zip \
    && ./aws/install \
    && rm -rf awscliv2.zip aws

# Install Terraform
RUN curl -LO "https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip" \
    && unzip "terraform_${TERRAFORM_VERSION}_linux_amd64.zip" -d /usr/local/bin \
    && rm -f "terraform_${TERRAFORM_VERSION}_linux_amd64.zip"

# Verify installations
RUN aws --version \
    && terraform --version \
    && git --version

# Switch back to the jenkins user
USER jenkins

# Default command to run when the container starts (already set in the base image)
# CMD ["jenkins-agent"]